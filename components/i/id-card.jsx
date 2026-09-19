import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tterhvcih.css';
import '../../css/g/gi416ibwv.css';
import '../../css/j/jzjrs5bvs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer tterhvcih"/><path class="duoicon-primary-layer gi416ibwv"/><path class="duoicon-primary-layer jzjrs5bvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:id-card"} {...others} />);
}

export default Component;
