import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0lidos6q.css';
import '../../css/f/fokf_m9cy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v0lidos6q"/><path class="fokf_m9cy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:tools"} {...others} />);
}

export default Component;
