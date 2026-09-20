import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mz_6y8b0c.css';
import '../../css/n/nbgejx56b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mz_6y8b0c"/><path class="nbgejx56b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mjml"} {...others} />);
}

export default Component;
