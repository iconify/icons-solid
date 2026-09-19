import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c818x0b4f.css';
import '../../css/v/vrte_9f8u.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="c818x0b4f"/><path class="vrte_9f8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:lock-fill"} {...others} />);
}

export default Component;
