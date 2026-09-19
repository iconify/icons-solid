import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfn3o34-i.css';
import '../../css/e/ecf1c0bzp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gfn3o34-i"/><path class="ecf1c0bzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:repositories"} {...others} />);
}

export default Component;
