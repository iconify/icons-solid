import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdv-jqbkl.css';
import '../../css/b/btgxzabzs.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jdv-jqbkl"/><path class="btgxzabzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:health-transfusion-bag"} {...others} />);
}

export default Component;
