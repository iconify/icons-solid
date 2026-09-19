import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8fc5u6ec.css';
import '../../css/i/iiydukdos.css';
import '../../css/g/g4-28t0-k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-primary-layer t8fc5u6ec"/><path class="duoicon-secondary-layer iiydukdos"/><path class="duoicon-primary-layer g4-28t0-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:cloud-snow"} {...others} />);
}

export default Component;
