import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aa6-ti_2t.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="aa6-ti_2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:save-as"} {...others} />);
}

export default Component;
