import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/om9bawvpj.css';
import '../../css/m/mfimjqbqe.css';
import '../../css/e/e_kg60brd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="om9bawvpj"/><path class="mfimjqbqe"/><path class="e_kg60brd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:real-estate-sign-building"} {...others} />);
}

export default Component;
