import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.nkvydenhi {
  fill: currentColor;
  d: path("M11.53 5a1.25 1.25 0 0 1 1.173.91l4.354 15.438l3.25-10.468a1.25 1.25 0 0 1 2.331-.147l2.167 4.767h2.945a1.25 1.25 0 1 1 0 2.5H24a1.25 1.25 0 0 1-1.138-.733l-1.141-2.51l-3.527 11.364a1.25 1.25 0 0 1-2.397-.032L11.4 10.502l-2.214 6.643A1.25 1.25 0 0 1 8 18H4.25a1.25 1.25 0 1 1 0-2.5h2.849l3.215-9.645A1.25 1.25 0 0 1 11.53 5");
}
</style><path class="nkvydenhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:pulse-32-filled"} {...others} />);
}

export default Component;
