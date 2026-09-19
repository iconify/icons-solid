import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pger3ebjv.css';
import '../../css/x/x8uhnoe8j.css';
import '../../css/q/qme253ihi.css';
import '../../css/v/vuqt7lwmf.css';
import '../../css/y/yzzo924cy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pger3ebjv"/><path class="x8uhnoe8j"/><path class="qme253ihi"/><path class="vuqt7lwmf"/><path class="yzzo924cy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:rotate-180"} {...others} />);
}

export default Component;
