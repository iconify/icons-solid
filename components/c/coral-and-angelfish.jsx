import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-t8_bbko.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="c-t8_bbko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:coral-and-angelfish"} {...others} />);
}

export default Component;
