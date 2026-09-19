import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1-74yk_y.css';
import '../../css/u/uf53hcsyv.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="x1-74yk_y"/><path class="uf53hcsyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:exit-fill-12"} {...others} />);
}

export default Component;
