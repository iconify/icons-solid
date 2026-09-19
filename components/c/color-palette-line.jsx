import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi4rgpbsh.css';
import '../../css/i/ih3xvpyom.css';
import '../../css/j/jxgdkxb5r.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="hi4rgpbsh"/><path class="ih3xvpyom"/><path class="jxgdkxb5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:color-palette-line"} {...others} />);
}

export default Component;
