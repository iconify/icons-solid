import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv2qb7bkp.css';
import '../../css/j/jbnieqb8j.css';
import '../../css/z/zwzzql3ez.css';
import '../../css/c/ci44pjbxj.css';
import '../../css/i/iuyjf1bze.css';
import '../../css/a/a7v3hwkdf.css';
import '../../css/z/zqirujbzm.css';
import '../../css/f/f8of_xtzx.css';
import '../../css/o/opmdxrbrc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pv2qb7bkp"/><path class="jbnieqb8j"/><path class="zwzzql3ez"/><path class="ci44pjbxj"/><path class="iuyjf1bze"/><path class="a7v3hwkdf"/><path class="zqirujbzm"/><path class="f8of_xtzx"/><path class="opmdxrbrc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:goat"} {...others} />);
}

export default Component;
