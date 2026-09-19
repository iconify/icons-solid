import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7s9ft_cd.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="e7s9ft_cd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:asterisk-fill-12"} {...others} />);
}

export default Component;
