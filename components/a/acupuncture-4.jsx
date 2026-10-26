import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o38pqhu6u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o38pqhu6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:acupuncture-4"} {...others} />);
}

export default Component;
