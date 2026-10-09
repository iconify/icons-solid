import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/da2byub9q.css';
import '../../css/c/c5u4wmg9r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="da2byub9q"/><path class="c5u4wmg9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heading-48"} {...others} />);
}

export default Component;
