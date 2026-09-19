import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pk_glsbdf.css';
import '../../css/r/r3m6txini.css';
import '../../css/z/z5lj_d9rb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pk_glsbdf"/><path class="r3m6txini"/><path class="z5lj_d9rb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:fridge"} {...others} />);
}

export default Component;
