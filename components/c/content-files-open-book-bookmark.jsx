import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m4spd6uww.css';
import '../../css/a/ag-fl02wi.css';
import '../../css/d/d7aps8ede.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="m4spd6uww"/><path class="ag-fl02wi"/><path class="d7aps8ede"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:content-files-open-book-bookmark"} {...others} />);
}

export default Component;
