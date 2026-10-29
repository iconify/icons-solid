import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcgdo5bpc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kcgdo5bpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:address-book-solid"} {...others} />);
}

export default Component;
