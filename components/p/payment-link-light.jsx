import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojbic-t7m.css';
import '../../css/p/p5vtv8brg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ojbic-t7m"/><path class="p5vtv8brg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:payment-link-light"} {...others} />);
}

export default Component;
