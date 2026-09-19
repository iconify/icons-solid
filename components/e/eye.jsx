import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cb4ssgb7r.css';
import '../../css/e/eopyr_bvr.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="cb4ssgb7r"/><circle class="eopyr_bvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:eye"} {...others} />);
}

export default Component;
