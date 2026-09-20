import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/db0of5bxd.css';
import '../../css/n/ndxq0db7y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="db0of5bxd"/><path class="ndxq0db7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:piggy-bank-coin"} {...others} />);
}

export default Component;
