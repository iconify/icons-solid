import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctoh45brs.css';
import '../../css/k/k0757lbit.css';
import '../../css/z/zfunmzbpv.css';
import '../../css/a/a9wju1rnc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ctoh45brs"/><path clip-rule="evenodd" class="k0757lbit"/><path class="zfunmzbpv"/><path class="a9wju1rnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:album-bold"} {...others} />);
}

export default Component;
