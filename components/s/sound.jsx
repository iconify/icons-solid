import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jbk93i8sj.css';
import '../../css/b/bu-tcbcin.css';
import '../../css/f/fhva5bb0u.css';
import '../../css/q/qbqvgkuwj.css';
import '../../css/m/m8bttzbsi.css';
import '../../css/q/qtabqobxa.css';
import '../../css/i/i7qbpzbgw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGVoCrycwd"><g class="ft5dv1b6b"><rect class="jbk93i8sj"/><circle class="bu-tcbcin"/><circle class="fhva5bb0u"/><circle class="qbqvgkuwj"/><circle class="m8bttzbsi"/><circle class="qtabqobxa"/><circle class="i7qbpzbgw"/></g></mask></defs><path mask="url(#SVGVoCrycwd)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:sound"} {...others} />);
}

export default Component;
