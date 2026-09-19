import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzv_u_b-g.css';
import '../../css/n/noehlf0bk.css';
import '../../css/f/fk0yjerem.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="nzv_u_b-g"/><circle class="noehlf0bk"/><path class="fk0yjerem"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:thin-client-line"} {...others} />);
}

export default Component;
