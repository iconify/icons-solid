import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3xs06bzl.css';
import '../../css/i/i19gygbii.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x3xs06bzl"/><path class="i19gygbii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:buildings"} {...others} />);
}

export default Component;
