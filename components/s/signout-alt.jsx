import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7ahsxa6g.css';
import '../../css/h/h-uptbcqa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e7ahsxa6g"/><path class="h-uptbcqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:signout-alt"} {...others} />);
}

export default Component;
