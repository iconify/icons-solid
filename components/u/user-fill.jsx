import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7uf5i4hv.css';
import '../../css/s/sgq0p14ld.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f7uf5i4hv"/><circle class="sgq0p14ld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:user-fill"} {...others} />);
}

export default Component;
