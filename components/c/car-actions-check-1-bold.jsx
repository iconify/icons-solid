import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x21i0yv0u.css';
import '../../css/h/hcnco5bma.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x21i0yv0u"/><path class="hcnco5bma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:car-actions-check-1-bold"} {...others} />);
}

export default Component;
