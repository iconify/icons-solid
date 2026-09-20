import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i1lhvwyyv.css';
import '../../css/m/mgag_5day.css';
import '../../css/i/irditn-cy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i1lhvwyyv"/><path class="mgag_5day"/><path class="irditn-cy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:nurse-assistant-emergency-flat"} {...others} />);
}

export default Component;
