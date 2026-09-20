import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbch_7bfy.css';
import '../../css/y/y9fzgxb1e.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hbch_7bfy"/><path class="y9fzgxb1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:atm2"} {...others} />);
}

export default Component;
