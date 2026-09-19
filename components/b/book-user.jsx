import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/icjlvdb0c.css';
import '../../css/z/zlhh38l7r.css';
import '../../css/p/ptvu1u_4n.css';
import '../../css/t/tvse9mhcg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="icjlvdb0c"/><path class="zlhh38l7r"/><circle class="ptvu1u_4n"/><path class="tvse9mhcg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:book-user"} {...others} />);
}

export default Component;
