import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8q6hq01f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e8q6hq01f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:textalign-justifyright-filled"} {...others} />);
}

export default Component;
