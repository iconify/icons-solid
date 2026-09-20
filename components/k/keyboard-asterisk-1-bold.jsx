import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ehtfmd7by.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ehtfmd7by"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:keyboard-asterisk-1-bold"} {...others} />);
}

export default Component;
