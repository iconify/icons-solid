import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bn_uf6bnc.css';
import '../../css/i/ivhxmubfa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bn_uf6bnc"/><path class="ivhxmubfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:person-check-fill-20"} {...others} />);
}

export default Component;
