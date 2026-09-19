import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4y6mmu1p.css';
import '../../css/r/rc6lwuj7v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer r4y6mmu1p"/><path class="duoicon-primary-layer rc6lwuj7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:align-bottom"} {...others} />);
}

export default Component;
