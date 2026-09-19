import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ocu754bvl.css';
import '../../css/u/unqc_fbjm.css';
import '../../css/x/x14bsnkwi.css';
import '../../css/m/m4xzt-y8u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ocu754bvl"/><circle class="unqc_fbjm"/><circle class="x14bsnkwi"/><circle class="m4xzt-y8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:burger"} {...others} />);
}

export default Component;
