import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gw96a2bzf.css';
import '../../css/d/ds1orlb4x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer gw96a2bzf"/><path class="ds1orlb4x duoicon-primary-layer"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:compass"} {...others} />);
}

export default Component;
