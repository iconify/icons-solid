import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v8qfcdbuz.css';
import '../../css/m/mp9z7jwwy.css';
import '../../css/u/u75xcjbnz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="v8qfcdbuz"/><path class="mp9z7jwwy"/><path class="u75xcjbnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:ecology-clean-battery"} {...others} />);
}

export default Component;
