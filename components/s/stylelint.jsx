import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8naembgy.css';
import '../../css/b/bigcvcccw.css';
import '../../css/j/jsnuk2brx.css';
import '../../css/n/neqr1uo0p.css';
import '../../css/r/r2b46x2kz.css';
import '../../css/c/c4tabiz7k.css';
import '../../css/c/c06vxjbkv.css';

const viewBox = {"width":412,"height":395};
const content = `<g transform="translate(31.478 29.499)scale(.84775)" class="u8naembgy"><path class="bigcvcccw"/><path class="jsnuk2brx"/><path class="neqr1uo0p"/><circle class="r2b46x2kz"/><circle class="c4tabiz7k"/><circle class="c06vxjbkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:stylelint"} {...others} />);
}

export default Component;
