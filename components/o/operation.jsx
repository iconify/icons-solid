import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hblu1qb3f.css';
import '../../css/o/o-a8ss1od.css';
import '../../css/r/r2mg1wbgz.css';
import '../../css/g/gw0_bj--j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hblu1qb3f"/><path class="o-a8ss1od"/><path class="r2mg1wbgz"/><path class="gw0_bj--j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:operation"} {...others} />);
}

export default Component;
