import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivjvz2eii.css';
import '../../css/p/pkgjvccjw.css';
import '../../css/l/l7wzwbbie.css';
import '../../css/m/myrna_blh.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVG60XUXchT" width="12" height="20" x="6" y="2" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="pkgjvccjw"/><path class="l7wzwbbie"/></mask><path mask="url(#SVG60XUXchT)" class="myrna_blh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:lightning-light"} {...others} />);
}

export default Component;
