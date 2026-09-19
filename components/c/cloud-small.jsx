import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eee2krb3x.css';

const viewBox = {"width":10,"height":10};
const content = `<path class="eee2krb3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:cloud-small"} {...others} />);
}

export default Component;
