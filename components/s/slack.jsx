import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lbf6eebui.css';
import '../../css/p/p1z0fjjwt.css';
import '../../css/d/d6-dxkgbz.css';
import '../../css/h/hsezjxbqv.css';
import '../../css/j/jwmfnhbqp.css';
import '../../css/a/abous0b3s.css';
import '../../css/z/zp2a_16sf.css';
import '../../css/i/ivcvatwgm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="lbf6eebui"/><path class="p1z0fjjwt"/><rect class="d6-dxkgbz"/><path class="hsezjxbqv"/><rect class="jwmfnhbqp"/><path class="abous0b3s"/><rect class="zp2a_16sf"/><path class="ivcvatwgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:slack"} {...others} />);
}

export default Component;
