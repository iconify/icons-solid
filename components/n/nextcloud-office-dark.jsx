import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uf79mvbno.css';
import '../../css/n/nq01l99qg.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="uf79mvbno"/><path clip-rule="evenodd" class="nq01l99qg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nextcloud-office-dark"} {...others} />);
}

export default Component;
