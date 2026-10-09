import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7ft_mbie.css';
import '../../css/l/lznd2ybdz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n7ft_mbie"/><path class="lznd2ybdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chef-hat-48-bold"} {...others} />);
}

export default Component;
