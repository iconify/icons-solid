import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/del6a6d2m.css';
import '../../css/l/lrkyxwbob.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="del6a6d2m"/><path class="lrkyxwbob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:share-box-solid"} {...others} />);
}

export default Component;
