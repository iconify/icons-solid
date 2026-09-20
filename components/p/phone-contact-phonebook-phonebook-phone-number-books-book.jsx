import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ioq770ctw.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ioq770ctw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:phone-contact-phonebook-phonebook-phone-number-books-book"} {...others} />);
}

export default Component;
