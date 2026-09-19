import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qc481ebrr.css';
import '../../css/c/c9yx--bxi.css';
import '../../css/l/lkcqbab8v.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="qc481ebrr"/><circle class="c9yx--bxi"/><path class="lkcqbab8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:crown-solid"} {...others} />);
}

export default Component;
