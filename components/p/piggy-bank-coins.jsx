import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k413-ia3f.css';

const viewBox = {"width":520,"height":512};
const content = `<path class="k413-ia3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:piggy-bank-coins"} {...others} />);
}

export default Component;
