import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqc5dho9i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wqc5dho9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hashicorp-vault-light"} {...others} />);
}

export default Component;
