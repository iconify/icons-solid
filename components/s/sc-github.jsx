import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oexiugx6c.css';

const viewBox = {"width":50,"height":50};
const content = `<path clip-rule="evenodd" class="oexiugx6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:sc-github"} {...others} />);
}

export default Component;
