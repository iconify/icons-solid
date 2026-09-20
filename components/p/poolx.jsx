import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-ktgtbeo.css';
import '../../css/g/gmg-t4p6n.css';
import '../../css/m/mndpj4b6k.css';
import '../../css/i/iodmegbah.css';
import '../../css/h/hy57fv2jl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v-ktgtbeo"/><path class="gmg-t4p6n"/><path class="mndpj4b6k"/><path clip-rule="evenodd" class="iodmegbah"/><path class="hy57fv2jl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:poolx"} {...others} />);
}

export default Component;
